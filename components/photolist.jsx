import PhotoCard from "./photoCard";

export default function PhotoList({photos}){
    return (
        <div className="flex flex-row justify-center flex-wrap mx-auto " >
            {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    );
}