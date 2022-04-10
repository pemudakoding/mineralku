import Layout from "@/Layouts/Layout";

function setLayout(currentPage) {
    currentPage.layout = page => <Layout children={page} />
}


export {
    setLayout
}
