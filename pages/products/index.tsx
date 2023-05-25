import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="/products/smartphone">スマートフォン</Link>
          </li>
          <li>
            <Link href="/products/pc">パソコン</Link>
          </li>
          <li>
            <Link href="/products/headphone">ヘッドホン</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
