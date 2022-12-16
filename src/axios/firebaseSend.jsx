import { storage } from "./firebase"
export let comeimages = ""

export const send = (image) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
        () => storage.ref('images').child(image.name).getDownloadURL()
            .then(fireBaseUrl => comeimages = fireBaseUrl)
            .catch(err => console.log(err))
        )
}