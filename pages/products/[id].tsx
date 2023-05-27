import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

//SSGの場合 最初のロードですべてレンダリング

export async function getStaticProps({ params }: any) {
  // const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const req = await fetch(
    `http://next12/${params.id}.json-i933se306-itomotoki8.vercel.app`
  );

  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  // const req = await fetch(`http://localhost:3000/products.json`);
  const req = await fetch(
    `http://next12/products.json-i933se306-itomotoki8.vercel.app`
  );
  const data = await req.json();

  const paths = data.map((product: string[]) => {
    return {
      params: {
        id: product,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

//SSRの場合　クリックしたときにその分だけレンダリング
// export async function getServerSideProps({ params }: any) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

const Product = ({ product }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <Image src={product.image} alt="商品" width={300} height={400} />
        <p>{product.name}</p>
        <br />
        <Link href="/products">商品一覧へ</Link>
      </main>
    </div>
  );
};

export default Product;
