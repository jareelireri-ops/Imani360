import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CaretRight, House } from '@phosphor-icons/react';


const Breadcrumb = ({ crumbs = [] }) => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');

        .cci-breadcrumb {
          width: 100%;
          background: #1a1a1a;
          border-bottom: 1px solid rgba(200,0,0,0.35);
          padding: clamp(6px, 1.5vw, 9px) clamp(12px, 4vw, 32px);
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .cci-breadcrumb__item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 600;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        .cci-breadcrumb__link {
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: color 0.15s;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cci-breadcrumb__link:hover { color: #e55; }

        .cci-breadcrumb__current {
          color: #e55;
          font-weight: 700;
        }

        .cci-breadcrumb__sep {
          color: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
        }
      `}</style>

      <nav className="cci-breadcrumb" aria-label="breadcrumb">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <div key={i} className="cci-breadcrumb__item">
              {/* separator (not before first item) */}
              {i > 0 && (
                <span className="cci-breadcrumb__sep">
                  <CaretRight size={11} weight="bold" />
                </span>
              )}

              {isLast ? (
                <span className="cci-breadcrumb__current">{crumb.label}</span>
              ) : (
                <span
                  className="cci-breadcrumb__link"
                  onClick={() => crumb.path && navigate(crumb.path)}
                >
                  {i === 0 && <House size={12} weight="fill" />}
                  {crumb.label}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumb;