'use client';

import { useState, useEffect, useRef } from 'react';
import { CFG } from '../content';

export default function CardPage() {
  const [cur, setCur] = useState(0);
  const [wishes, setWishes] = useState<string[]>(['', '', '']);
  const [wishSent, setWishSent] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [noScale, setNoScale] = useState(1);
  const [noHidden, setNoHidden] = useState(false);
  const [answeredYes, setAnsweredYes] = useState(false);

  const totalPages = 10;
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);

  // Load saved wishes
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishes20-10');
      if (saved) setWishes(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const handleWishChange = (idx: number, val: string) => {
    const next = [...wishes];
    next[idx] = val;
    setWishes(next);
    try {
      localStorage.setItem('wishes20-10', JSON.stringify(next));
    } catch (e) {}
  };

  const createFloatingEmoji = (e: React.MouseEvent<HTMLButtonElement>, emoji: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const span = document.createElement('span');
      span.className = 'fl';
      span.textContent = emoji;
      span.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 160 + 'px';
      span.style.top = rect.top + rect.height / 2 + (Math.random() - 0.5) * 50 + 'px';
      span.style.animationDelay = i * 0.1 + 's';
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 2800);
    }
  };

const handleWishSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setWishSent(true);
    createFloatingEmoji(e, '💚');

    // Gom nội dung 3 điều ước
    const content = wishes.filter(w => w.trim() !== '').map((w, i) => `${i + 1}. ${w}`).join('\n');
    const textMsg = `💌 Gửi anh 3 điều ước từ người yêu:\n${content}`;

    // Thông tin Telegram Bot của bạn
    const BOT_TOKEN = "8826196716:AAH6webvVAv5fyh9HAFuEc_bukLX08vZ48";
    const CHAT_ID = "1504575489";

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMsg,
        }),
      });
    } catch (error) {
      console.error("Lỗi gửi tin nhắn:", error);
    }
  };

  const handleNoClick = () => {
    const nextIdx = noIndex + 1;
    const nextScale = noScale * 0.82;
    if (nextIdx >= CFG.no.length) {
      setNoHidden(true);
    } else {
      setNoIndex(nextIdx);
      setNoScale(nextScale);
    }
  };

  const handleYesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnsweredYes(true);
    createFloatingEmoji(e, '💚');
    createFloatingEmoji(e, '🍃');
  };

  const renderPhoto = (src?: string) => {
    if (src) {
      return <img src={src} alt="" loading="lazy" />;
    }
    return '🌿';
  };

  const renderPol = (src?: string, cap?: string, cls?: string) => (
    <div className={`pol ${cls || ''}`}>
      <div className="ph">{renderPhoto(src)}</div>
      {cap && <div className="cap">{cap}</div>}
    </div>
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) > 60 && Math.abs(dy) < 50) {
      if (dx < 0 && cur < totalPages - 1) setCur(cur + 1);
      if (dx > 0 && cur > 0) setCur(cur - 1);
    }
  };

  return (
    <>
      <div className="top">{CFG.date}</div>

      <div
        className="stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`book ${cur > 0 ? 'spread' : ''}`}>
          {/* TRANG 00: BÌA */}
          <div
            className={`leaf ${0 < cur ? 'flip' : ''}`}
            style={{ zIndex: 0 < cur ? 100 : totalPages }}
            onClick={() => 0 === cur && setCur(1)}
          >
            <div className="face fr">
              <div className="in cov">
                <svg
                  className="leafi"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="var(--acc)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M50 92V40" />
                  <path d="M50 70c-14 0-24-8-26-22 14 0 24 8 26 22z" />
                  <path d="M50 54c12 0 22-8 24-20-12 0-22 8-24 20z" />
                  <path d="M50 40c-6-8-6-18 0-26 6 8 6 18 0 26z" />
                </svg>
                <div className="d">20 · 10</div>
                <h1 className="serif">Gửi {CFG.her}</h1>
                <div className="s">{CFG.frontSub}</div>
                <div className="seal">♡</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(0)}>
              <q>{CFG.backs[0]?.quote}</q>
            </div>
          </div>

          {/* TRANG 01: TÂM THƯ */}
          <div
            className={`leaf ${1 < cur ? 'flip' : ''}`}
            style={{ zIndex: 1 < cur ? 101 : totalPages - 1 }}
            onClick={() => 1 === cur && setCur(2)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">{CFG.letterKick}</div>
                <h2 className="serif">{CFG.her}</h2>
                {CFG.letter.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <div className="sign serif">{CFG.sign}</div>
                <div className="pn">TRANG 01</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(1)}>
              <q>{CFG.backs[1]?.quote}</q>
            </div>
          </div>

          {/* TRANG 02: DÀNH TẶNG */}
          <div
            className={`leaf ${2 < cur ? 'flip' : ''}`}
            style={{ zIndex: 2 < cur ? 102 : totalPages - 2 }}
            onClick={() => 2 === cur && setCur(3)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">Dành tặng · Khoảnh khắc của em</div>
                {renderPol(CFG.photos.dedication, CFG.dedicationCaption, 'big')}
                <div className="pn">TRANG 02</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(2)}>
              <q>{CFG.backs[2]?.quote}</q>
            </div>
          </div>

          {/* TRANG 03: HỒ SƠ */}
          <div
            className={`leaf ${3 < cur ? 'flip' : ''}`}
            style={{ zIndex: 3 < cur ? 103 : totalPages - 3 }}
            onClick={() => 3 === cur && setCur(4)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">Hồ sơ</div>
                <h2 className="serif">{CFG.detailTitle}</h2>
                <dl className="prof">
                  {CFG.profile.map(([label, val], i) => (
                    <div key={i}>
                      <dt>{label}</dt>
                      <dd>{val}</dd>
                    </div>
                  ))}
                </dl>
                <div className="pn">TRANG 03</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(3)}>
              <q>{CFG.backs[3]?.quote}</q>
            </div>
          </div>

          {/* TRANG 04: KỶ NIỆM (ẢNH & GHI CHÚ) */}
          <div
            className={`leaf ${4 < cur ? 'flip' : ''}`}
            style={{ zIndex: 4 < cur ? 104 : totalPages - 4 }}
            onClick={() => 4 === cur && setCur(5)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">{CFG.detailsPhotoKick}</div>
                {renderPol(CFG.photos.detailsPhoto, CFG.detailsPhotoCaption, 'big')}
                <div className="pn">TRANG 04</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(4)}>
              <q>{CFG.backs[4]?.quote}</q>
            </div>
          </div>

          {/* TRANG 05: KHOẢNH KHẮC (ẢNH & TỰ GHI) */}
          <div
            className={`leaf ${5 < cur ? 'flip' : ''}`}
            style={{ zIndex: 5 < cur ? 105 : totalPages - 5 }}
            onClick={() => 5 === cur && setCur(6)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">{CFG.momentOverviewKick}</div>
                {renderPol(CFG.photos.momentOverview, CFG.momentOverviewCaption, 'big')}
                <div className="pn">TRANG 05</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(5)}>
              <q>{CFG.backs[5]?.quote}</q>
            </div>
          </div>

{/* TRANG 06: KHOẢNH KHẮC 01 & 02 */}
<div
  className={`leaf ${6 < cur ? 'flip' : ''}`}
  style={{ zIndex: 6 < cur ? 106 : totalPages - 6 }}
  onClick={() => 6 === cur && setCur(7)}
>
  <div className="face fr">
    <div className="in">
      <div className="kick">Khoảnh khắc 01 · 02</div>
      {[0, 1].map((idx, k) => {
        const quote = CFG.moments[idx] || '';
        return (
          <div key={idx} className={`mr ${k ? 'rev' : ''}`}>
            {renderPol(CFG.photos.moments[idx])}
            <div className="tx">
              <p className="serif" style={{ fontSize: '1.25em', fontStyle: 'italic', color: 'var(--acc)', lineHeight: '1.4' }}>
                "{quote}"
              </p>
            </div>
          </div>
        );
      })}
      <div className="pn">TRANG 06</div>
      <div className="hint">Chạm để lật ›</div>
    </div>
  </div>
  <div className="face back" onClick={() => setCur(6)}>
    <q>{CFG.backs[6]?.quote}</q>
  </div>
</div>

{/* TRANG 07: KHOẢNH KHẮC 03 & 04 */}
<div
  className={`leaf ${7 < cur ? 'flip' : ''}`}
  style={{ zIndex: 7 < cur ? 107 : totalPages - 7 }}
  onClick={() => 7 === cur && setCur(8)}
>
  <div className="face fr">
    <div className="in">
      <div className="kick">Khoảnh khắc 03 · 04</div>
      {[2, 3].map((idx, k) => {
        const quote = CFG.moments[idx] || '';
        return (
          <div key={idx} className={`mr ${k ? 'rev' : ''}`}>
            {renderPol(CFG.photos.moments[idx])}
            <div className="tx">
              <p className="serif" style={{ fontSize: '1.25em', fontStyle: 'italic', color: 'var(--acc)', lineHeight: '1.4' }}>
                "{quote}"
              </p>
            </div>
          </div>
        );
      })}
      <div className="pn">TRANG 07</div>
      <div className="hint">Chạm để lật ›</div>
    </div>
  </div>
  <div className="face back" onClick={() => setCur(7)}>
    <q>{CFG.backs[7]?.quote}</q>
  </div>
</div>

          {/* TRANG 08: ĐIỀU ƯỚC */}
          <div
            className={`leaf ${8 < cur ? 'flip' : ''}`}
            style={{ zIndex: 8 < cur ? 108 : totalPages - 8 }}
            onClick={() => 8 === cur && setCur(9)}
          >
            <div className="face fr">
              <div className="in">
                <div className="kick">Điều ước</div>
                <h2 className="serif">{CFG.wishTitle}</h2>
                <p className="sub">{CFG.wishIntro}</p>

                {CFG.wishPlaceholders.map((p, i) => (
                  <input
                    key={i}
                    className="field"
                    placeholder={p}
                    value={wishes[i] || ''}
                    onChange={(e) => handleWishChange(i, e.target.value)}
                  />
                ))}

                <div style={{ marginTop: '.4em' }}>
                  <button className="btn" onClick={handleWishSubmit}>
                    {CFG.wishSend}
                  </button>
                </div>

                <div className={`ok ${wishSent ? 'on' : ''}`}>
                  {CFG.wishOk}
                  {CFG.sendTo && (
                    <a
                      href={CFG.sendTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--acc)' }}
                    >
                      {' '}Nhắn cho anh →
                    </a>
                  )}
                </div>

                <div className="pn">TRANG 08</div>
                <div className="hint">Chạm để lật ›</div>
              </div>
            </div>
            <div className="face back" onClick={() => setCur(8)}>
              <q>{CFG.backs[8]?.quote}</q>
            </div>
          </div>

          {/* TRANG 09: CÂU HỎI CUỐI & CHỮ KÝ */}
          <div
            className={`leaf ${9 < cur ? 'flip' : ''}`}
            style={{ zIndex: 9 < cur ? 109 : totalPages - 9 }}
          >
            <div className="face fr">
              <div className="in fin">
                <div className="kick">Câu hỏi cuối</div>
                <h2 className="serif" style={{ opacity: answeredYes ? 0.35 : 1 }}>
                  {CFG.question}
                </h2>

                {!answeredYes && (
                  <div className="act">
                    <button className="btn" onClick={handleYesClick}>
                      {CFG.yes}
                    </button>
                    {!noHidden && (
                      <button
                        id="no"
                        onClick={handleNoClick}
                        style={{
                          transform: `scale(${noScale})`,
                        }}
                      >
                        {CFG.no[noIndex]}
                      </button>
                    )}
                  </div>
                )}

                {answeredYes && (
                  <div className="ans" style={{ display: 'block' }}>
                    <h2 className="serif">{CFG.answer}</h2>
                    <p className="sub">{CFG.answerNote}</p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '1.8em',
                        textAlign: 'center',
                        fontSize: '0.9em',
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          borderTop: '1px solid var(--line)',
                          paddingTop: '.5em',
                          margin: '0 .8em',
                        }}
                      >
                        <div
                          className="serif"
                          style={{ fontSize: '1.3em', color: 'var(--acc)' }}
                        >
                          {CFG.her}
                        </div>
                        <div
                          style={{
                            fontSize: '.65em',
                            letterSpacing: '.2em',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            marginTop: '.2em',
                          }}
                        >
                          EM · ĐÃ KÝ
                        </div>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          borderTop: '1px solid var(--line)',
                          paddingTop: '.5em',
                          margin: '0 .8em',
                        }}
                      >
                        <div
                          className="serif"
                          style={{ fontSize: '1.3em', color: 'var(--acc)' }}
                        >
                          {CFG.him}
                        </div>
                        <div
                          style={{
                            fontSize: '.65em',
                            letterSpacing: '.2em',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            marginTop: '.2em',
                          }}
                        >
                          ANH · ĐÃ KÝ
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pn">TRANG 09</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav">
        <button disabled={cur === 0} onClick={() => setCur(cur - 1)}>
          ‹ Trước
        </button>
        <div className="dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <i key={i} className={i === cur ? 'on' : ''} />
          ))}
        </div>
        <button disabled={cur === totalPages - 1} onClick={() => setCur(cur + 1)}>
          {cur === 0 ? 'Mở thiệp ›' : 'Tiếp ›'}
        </button>
      </div>
    </>
  );
}
