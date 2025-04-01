import Image from 'next/image';

export default function PastelariaPage() {
  const pasteis = [
    { sabor: "Carne", preco: 10.00, estoque: 5 },
    { sabor: "Queijo", preco: 8.00, estoque: 3 },
    { sabor: "Frango", preco: 9.50, estoque: 0 },
    { sabor: "Pizza", preco: 10.00, estoque: 2 },
    { sabor: "Calabresa", preco: 10.50, estoque: 4 },
    { sabor: "Palmito", preco: 11.00, estoque: 0 },
    { sabor: "Camarão", preco: 15.00, estoque: 1 },
    { sabor: "Chocolate", preco: 7.50, estoque: 6 }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>🥟 Pastelaria do Seu Zé</h1>
      </header>

      <div className="linha-pasteis">
        {pasteis.map((pastel, index) => (
          <div key={index} className={`pastel-card ${pastel.estoque === 0 ? 'esgotado' : ''}`}>
            <div className="pastel-image-container">
              <Image
                src={pastel.estoque > 0 ? "/images/pastel.png" : "/images/pastel-bw.png"}
                alt={`Pastel de ${pastel.sabor}`}
                width={100}
                height={80}
              />
            </div>
            <div className="pastel-info">
              <h3>{pastel.sabor}</h3>
              <p>R$ {pastel.preco.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
