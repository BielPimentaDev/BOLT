const API_KEY = 'AIzaSyDjfPOD18BY5oIAzUo1yEEHZLeWDiM6doM'

export function getMapPreview(lat, lng){
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`
    return imagePreviewUrl
}