"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import NewContact from "@/components/NewContact";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveContact = (contact: {
    firstName: string;
    lastName: string;
    email: string;
    favorite: boolean;
  }) => {
    // Save contact logic here
    setModalOpen(false);
  };

  return (
    <html lang="en">
      <body>
        <Navbar onNewContact={handleOpenModal} />
        <NewContact
          open={modalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveContact}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
