import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import styles from "./ContactCard.module.css";

// Define the types for the component's props
interface ContactCardProps {
  name: string;
  email: string;
  avatarUrl?: string; // Avatar is optional
  onRemove: () => void; // Function to call when remove is clicked
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  email,
  avatarUrl,
  onRemove,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        {/* Render the provided image or a placeholder */}
        {avatarUrl ? (
          // Use the optimized Image component instead of <img>
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            width={94} // Specify the width of the image
            height={94} // Specify the height of the image
            className={styles.avatar}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {/* SVG Placeholder to mimic the geometric logo in your image */}
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="48" fill="#E0E0E0" />
              <circle cx="40" cy="55" r="20" fill="#BDBDBD" />
              <path d="M55 35L85 65L55 65L55 35Z" fill="#BDBDBD" />
            </svg>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.email}>{email}</p>
      </div>

      <hr className={styles.divider} />

      <button onClick={onRemove} className={styles.removeButton}>
        <span className={styles.removeIcon}>&times;</span> REMOVE
      </button>
    </div>
  );
};

export default ContactCard;
