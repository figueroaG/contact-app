import React from "react";
import ContactCard from "./ContactCard";
import styles from "./List.module.css";

interface Contact {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  isFavorite: boolean;
}

interface ListProps {
  contacts: Contact[];
  showFavorites: boolean;
}

const List: React.FC<ListProps> = ({ contacts, showFavorites }) => {
  const filteredContacts = showFavorites
    ? contacts.filter((contact) => contact.isFavorite)
    : contacts;

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.title}>
          {showFavorites ? "Favorites" : "Contact List"}
        </span>
        <div className={styles.greenLine}></div>
      </div>
      <div className={styles.cardGrid}>
        {filteredContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            avatarUrl={contact.avatarUrl}
            onRemove={() =>
              console.log(`Remove contact with id: ${contact.id}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default List;
