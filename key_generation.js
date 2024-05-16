document.addEventListener("DOMContentLoaded", () => {
    const generateKeysButton = document.getElementById("generateKeysButton");
    const privateKeyTextarea = document.getElementById("privateKey");
    const publicKeyTextarea = document.getElementById("publicKey");
    const savePrivateKeyButton = document.getElementById("savePrivateKey");
    const savePublicKeyButton = document.getElementById("savePublicKey");

    generateKeysButton.addEventListener("click", () => {
        try {
            // Generate new key pair
            const keys = new JSEncrypt({ default_key_size: 2048 });
            keys.getKey();

            // Update textareas with new keys
            privateKeyTextarea.value = keys.getPrivateKey();
            publicKeyTextarea.value = keys.getPublicKey();

            alert("New key pair generated successfully.");
        } catch (error) {
            console.error("Error generating key pair:", error);
            alert("Error generating key pair. Please try again.");
        }
    });

    savePrivateKeyButton.addEventListener("click", () => {
        downloadText(privateKeyTextarea.value, 'private_key.txt');
    });

    savePublicKeyButton.addEventListener("click", () => {
        downloadText(publicKeyTextarea.value, 'public_key.txt');
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
