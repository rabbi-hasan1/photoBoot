import Modal from "@/components/Modal";
import PostDetail from "@/components/photoDetail";

export default async function photoIterceptor({params}){
    const {id , lang} = await params ;
    return(
        <Modal>
            <PostDetail id={id} lang={lang} />
        </Modal>
    );
}