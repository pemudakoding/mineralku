import Layout from "@/layouts/Layout";

function setLayout(currentPage) {
    currentPage.layout = page => <Layout children={page} />
}


export {
    setLayout
}
