import styles from "../styles/Product.module.css";
import data from "../data/products.js";
import Image from "next/image";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.cards}>
        {data.map((product) => (
          <div className={styles.card}>
            <Image
              src="/images/shoe.jpg"
              width={240}
              height={240}
              className={styles.productimage}
            ></Image>
            <h2 className={styles.productname}>Lorem Ipsum</h2>
            <div className={styles.productprice}>$3.99</div>
            <div className={styles.buttons}>
              <button className={styles.viewbutton}>View Details</button>
              {/* <button className={styles.wishbutton}>WishList</button> */}
              <button className={styles.cartbutton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
