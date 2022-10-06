import styles from "../styles/Forms.module.css";
import Image from "next/image";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Image
          src="/images/shoe.jpg"
          width={120}
          height={120}
          className={styles.productimage}
        ></Image>
        <form className={styles.contactform}>
          <div className={styles.inpgrp}>
            <label className={styles.label} for="email">
              Email
            </label>
            <input className={styles.inp} name="email" type="email" />
          </div>
          <div className={styles.inpgrp}>
            <label className={styles.label} for="password">
              Password
            </label>
            <input className={styles.inp} name="password" type="password" />
          </div>
          <div className={styles.inpgrp}>
            <button type="submit" class={styles.submit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
