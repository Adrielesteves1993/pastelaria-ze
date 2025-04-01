export default function MenuItem({ category, price }) {
    return (
      <section className="menu-section">
        <h2>{category}</h2>
        <ul>
          <li className="menu-item">
            <span>R$: {price}</span>
          </li>
          <li className="menu-item">
            <span>R$: {price}</span>
          </li>
        </ul>
      </section>
    );
  }