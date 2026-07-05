* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #202124;
}

button,
input {
  font-family: inherit;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at top left, rgba(12, 111, 178, 0.08), transparent 32%),
    radial-gradient(circle at top right, rgba(126, 79, 245, 0.08), transparent 30%),
    #ffffff;
}

.header {
  height: 74px;
  padding: 0 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 800;
  font-size: 19px;
  color: #111827;
}

.brandLogo {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: #111827;
  color: #ffffff;
  font-weight: 900;
}

.header a {
  color: #3c4043;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 999px;
}

.header a:hover {
  background: #f1f3f4;
}

.hero {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 78px 20px 50px;
  text-align: center;
  flex: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: #5f6368;
  font-size: 13px;
  margin-bottom: 18px;
}

h1 {
  margin: 0;
  font-size: clamp(68px, 11vw, 118px);
  line-height: 0.95;
  letter-spacing: -6px;
  font-weight: 900;
  background: linear-gradient(90deg, #0c6fb2, #7e4ff5, #df9d21);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin: 18px auto 0;
  max-width: 560px;
  color: #5f6368;
  font-size: 17px;
  line-height: 1.6;
}

.searchBox {
  max-width: 690px;
  height: 60px;
  margin: 36px auto 36px;
  padding: 0 22px;
  border: 1px solid #dadce0;
  border-radius: 999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 3px 12px rgba(60, 64, 67, 0.08);
  transition: 0.2s ease;
}

.searchBox:hover,
.searchBox:focus-within {
  border-color: transparent;
  box-shadow: 0 8px 26px rgba(60, 64, 67, 0.16);
}

.searchBox svg {
  color: #5f6368;
  flex-shrink: 0;
}

.searchBox input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #202124;
  font-size: 16px;
}

.searchBox input::placeholder {
  color: #9aa0a6;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 10px;
}

.card {
  border: 1px solid #e5e7eb;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  min-height: 230px;
  padding: 24px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.22s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #d1d5db;
  box-shadow: 0 18px 44px rgba(17, 24, 39, 0.1);
}

.card.disabled {
  cursor: default;
  opacity: 0.75;
}

.card.disabled:hover {
  transform: none;
  box-shadow: none;
}

.iconBox {
  width: 62px;
  height: 62px;
  border-radius: 22px;
  display: grid;
  place-items: center;
}

.card h2 {
  margin: 22px 0 7px;
  font-size: 21px;
  color: #111827;
  letter-spacing: -0.4px;
}

.card p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.55;
}

.cardFooter {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5f6368;
}

.cardFooter span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f8fafc;
  border: 1px solid #edf0f3;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 13px;
}

footer {
  padding: 24px 34px;
  display: flex;
  justify-content: center;
  gap: 18px;
  color: #9aa0a6;
  font-size: 13px;
}

@media (max-width: 820px) {
  .grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    min-height: 190px;
  }
}

@media (max-width: 520px) {
  .header {
    padding: 0 18px;
    height: 68px;
  }

  .hero {
    padding-top: 48px;
  }

  h1 {
    letter-spacing: -4px;
  }

  .subtitle {
    font-size: 15px;
  }

  .searchBox {
    height: 56px;
    padding: 0 18px;
  }

  footer {
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
}