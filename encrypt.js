document.addEventListener("DOMContentLoaded", () => {

    const encryptButton = document.getElementById("encryptButton");
    const plaintextTextarea = document.getElementById("plaintext_encryption");
    const publicKeyEncryptTextarea = document.getElementById("publicKeyEncrypt");
    const encryptedResultTextarea = document.getElementById("encryptedResult");
    const saveCipherTextButton = document.getElementById("saveCipherText");

    
    
encryptButton.addEventListener("click", () => {
    try {
        // Trim leading/trailing whitespace from public key
        const publicKey = publicKeyEncryptTextarea.value.trim();

        // Check if public key is empty
        if (!publicKey) {
            throw new Error("Public key is empty.");
        }

        // Create JSEncrypt instance with provided public key
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);

        // Encrypt the plaintext message
        const encryptedMessage = encrypt.encrypt(plaintextTextarea.value);

        // Update textarea with encrypted message
        encryptedResultTextarea.value = encryptedMessage;

        alert("Message encrypted successfully.");
    } catch (error) {
        console.error("Error encrypting message:", error);
        alert("Error encrypting message. Please check the public key and try again.");
    }
});

saveCipherTextButton.addEventListener("click", () => {
    downloadText(encryptedResultTextarea.value, 'cipher_text.txt');
});

function downloadText(text, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

});