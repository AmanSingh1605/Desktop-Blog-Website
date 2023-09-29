import Button from "@/components/button/button";
import Styles from "./page.module.css";
import Image from "next/image";

export default function Category({ params }) {
  return (
    <div className={Styles.container}>
      <h2>{params.category}</h2>
      <div className={Styles.content}>
        <div className={Styles.desc}>
          <h3 className={Styles.contentTitle}>Title here</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            voluptate architecto eveniet provident aliquam, maiores eum sunt
            cumque quod perspiciatis facere accusamus alias minima nulla
            suscipit consequatur aperiam?
          </p>
          <Button url="#" text="See Now" />
        </div>
        <div className={Styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="image"
          />
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.desc}>
          <h3 className={Styles.contentTitle}>Title here</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            voluptate architecto eveniet provident aliquam, maiores eum sunt
            cumque quod perspiciatis facere accusamus alias minima nulla
            suscipit consequatur aperiam?
          </p>
          <Button url="#" text="See Now" />
        </div>
        <div className={Styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
