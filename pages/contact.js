import styles from "../styles/Forms.module.css";
import Image from "next/image";

export default function Contact() {
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
          <div>
            <label className={styles.label} for="subject">
              Subject
            </label>
            <input className={styles.inp} name="subject" type="text" />
          </div>
          <div>
            <label className={styles.label} for="message">
              Message
            </label>
            <textarea className={styles.textarea} name="message"></textarea>
          </div>

          <div className={styles.inpgrp}>
            <button type="submit" class={styles.submit}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
