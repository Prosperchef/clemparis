export default function Home() {
  const paris = [
    { type: "Safe", match: "Tchéquie - Monténégro", pari: "Tchéquie gagne + -3,5 buts", cote: 2.03 },
    { type: "Value", match: "Belgique - Macédoine", pari: "Belgique gagne + +1,5 buts", cote: 1.65 },
    { type: "Fun", match: "Italie - Norvège", pari: "Italie gagne + but de Haaland", cote: 5.50 },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎯 Les paris du jour by Clément</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {paris.map((p, i) => (
          <div key={i} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>{p.type} Bet</h2>
            <p><strong>Match :</strong> {p.match}</p>
            <p><strong>Pari :</strong> {p.pari}</p>
            <p><strong>Cote :</strong> {p.cote}</p>
            <div style={{ marginTop: '0.5rem' }}>
              <button style={{ marginRight: '0.5rem' }}>✅ Gagné</button>
              <button>❌ Perdu</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}