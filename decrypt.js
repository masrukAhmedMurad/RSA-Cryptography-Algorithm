document.addEventListener("DOMContentLoaded", () => {

    const decryptButton = document.getElementById("decryptButton");
    const ciphertextTextarea = document.getElementById("ciphertext_decryption");
    const privateKeyDecryptTextarea = document.getElementById("privateKeyDecrypt");
    const decryptedResultTextarea = document.getElementById("decryptedResult");


    decryptButton.addEventListener("click", () => {
        try {
            // Create JSEncrypt instance with provided private key
            const privateKey = new JSEncrypt();
            privateKey.setPrivateKey(privateKeyDecryptTextarea.value);

            // Decrypt the ciphertext message
            const decryptedMessage = privateKey.decrypt(ciphertextTextarea.value);

            // Update textarea with decrypted message
            decryptedResultTextarea.value = decryptedMessage;

            alert("Message decrypted successfully.");
        } catch (error) {
            console.error("Error decrypting message:", error);
            alert("Error decrypting message. Please try again.");
        }
    });
});
