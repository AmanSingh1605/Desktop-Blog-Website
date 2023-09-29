import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";


export const metadata = {
  title: "About",
  description: "About page",
};


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imageText}>
          <h1>Digital Storyellers</h1>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <h1 className={styles.leftTitle}>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            accusantium quis modi est expedita consectetur eos neque repellendus
            at esse!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            aspernatur assumenda minus aperiam distinctio velit praesentium
            quasi unde animi accusantium vero voluptas, laborum, sapiente
            repudiandae. Qui debitis non soluta obcaecati unde perspiciatis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            ratione recusandae magnam ea consequatur sunt laborum necessitatibus
            debitis.
          </p>
        </div>
        <div className={styles.right}>
          <h1 className={styles.rightTitle}>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            quas cumque quis minima dolorum quia ipsa ad tempore ipsum, iste
            ipsam, molestiae obcaecati commodi eveniet odit, quidem facilis
            tenetur et asperiores hic!
          </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem dolor</li>
            <li>Lorem sit.</li>
          </ul>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
