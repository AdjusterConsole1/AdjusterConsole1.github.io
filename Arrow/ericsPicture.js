let db;
const DB_NAME = "ImageDatabase";
const STORE_NAME = "Images";
const IMAGE_KEY = "compressedImage";
const DEFAULT_IMAGE = "./Images/Other/embossedLogo1.png";

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            resolve(db);
        };
        request.onerror = (e) => reject(e);
    });
};

const compressImage = (file, maxWidth = 300, quality = 1) => {
    return new Promise((resolve) => {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = (event) => {
            img.src = event.target.result;
        };
        img.onload = () => {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            const scale = maxWidth / img.width;
            canvas.width = maxWidth;
            canvas.height = img.height * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressedDataURL = canvas.toDataURL("image/jpeg", quality);
            resolve(compressedDataURL);
        };
        reader.readAsDataURL(file);
    });
};

const saveImageToDB = (dataURL) => {
    return new Promise((resolve) => {
        const transaction = db.transaction(STORE_NAME, "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        store.clear().onsuccess = () => {
            store.put(dataURL, IMAGE_KEY).onsuccess = () => {
                resolve();
            };
        };
    });
};

const loadImageFromDB = () => {
    return new Promise((resolve) => {
        const transaction = db.transaction(STORE_NAME, "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(IMAGE_KEY);
        request.onsuccess = (e) => {
            const dataURL = e.target.result;
            resolve(dataURL);
        };
    });
};

const initializeImage = async () => {
    await openDB();
    const savedImage = await loadImageFromDB();
    const imgElement = document.getElementById("retrievedImage");
    if (savedImage) {
        imgElement.src = savedImage;
    } else {
        imgElement.src = DEFAULT_IMAGE;
    }
};

document.getElementById("imageInput").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const compressedImage = await compressImage(file);
    await saveImageToDB(compressedImage);
    document.getElementById("retrievedImage").src = compressedImage;
});
