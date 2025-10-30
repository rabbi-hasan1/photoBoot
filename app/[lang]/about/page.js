import { getDictionaris } from "../dictonaris/dictionaris";

export default async function About({params}){
    const {lang} = await params;
    const language = await getDictionaris(lang);
    return(
        <>
        <p>{language.uploadedOn}</p>
        </>
    )
}