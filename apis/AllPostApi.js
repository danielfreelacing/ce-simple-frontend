

// get all post 

export async function getAllPostData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wp/v2/posts?&_embed`);
        if (res.ok) {
            const result = await res.json();
            return result;
        } else {
            console.error("API Error", "API Request not success!");
            return null;
        }
    } catch (e) {
        console.error("API Error", e.message);
        return null;
    }
}


// get 100 post per page 

export async function getPostPerPage() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wp/v2/posts?per_page=100&_embed`);
        if (res.ok) {
            const result = await res.json();
            return result;
        } else {
            console.error("API Error", "API Request not success!");
            return null;
        }
    } catch (e) {
        console.error("API Error", e.message);
        return null;
    }
}


// get post by slug 

export async function getSinglePostBySlug(slug) {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/wp/v2/posts?slug=${slug}&acf_format=standard`);
        if (res.ok) {
            const result = await res.json();
            return result[0];
        } else {
            console.error("API Error", "API Request not success!");
            return null;
        }
    } catch (e) {
        console.error("API Error", e.message);
        return null;
    }
}

//get all courses


export async function getCourses() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ldlms/v1/sfwd-courses?_embed`);
        if (res.ok) {
            const result = await res.json();
            return result;
        } else {
            console.error("API Error", "API Request not success!");
            return null;
        }
    } catch (e) {
        console.error("API Error", e.message);
        return null;
    }
}
