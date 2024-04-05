import axios from "axios";

const apiClient=axios.create(
  {
      baseURL:'http://localhost:9999/'
  }
)
export const LoginCall=(email,password)=> apiClient.post(`/login`,JSON.stringify({
  email: email,
  password: password}),
)
export const LogoutCall=()=> apiClient.get(`/logout`)








export const RegisterLibraryCall=(name,email,contact,password,libname)=> apiClient.post(`Register/Library`,JSON.stringify({
name:name,
email:email,
contact_number:Number(contact),
password:password,
lib_name:libname
}))
// export const SignupReaderCall=(name,email,contact,password,lib)=> apiClient.post(`signup/${lib}`,JSON.stringify({
//   name:name,
//   email:email,
//   contact_number:Number(contact),
//   password:password

//   }))
export const GetLibraryCall=()=> apiClient.get(`/library`)
export const Deletebook=(isbn)=> apiClient.delete(`/admin/book/${isbn}`)

export const GetUserCall =(Role)=>apiClient.get(`/${Role}/user`);
// export const RemoveAdminCall =(Role)=>apiClient.delete(`/${Role}/admin`);


apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export const AddAdminCall=(name,email,contact,password,role)=> apiClient.post(`/${role}/admin`,JSON.stringify({
//   name:name,
//   email:email,
//   contact_number:Number(contact),
//   password:password
//   }))

 
  export const AddBookCall=(isbn,title,authors,publisher,version,total,role)=> apiClient.post(`/${role}/book`,JSON.stringify({
    isbn:Number(isbn),
    Title:title,
    Authors:authors,
    Publisher:publisher,
    Version:version,
    TotalCopies:Number(total)
    }))
    
  
  export const GetBookCall =(Role)=>apiClient.get(`/${Role}/book`);
  export const IssuedBook =(Role)=>apiClient.get(`/${Role}/issued`);

  export const GetRequestCall = ()=>apiClient.get(`/admin/request`);
  export const RequestBook =(book_id)=>apiClient.post(`/reader/request` ,JSON.stringify(
    {
      book_id:Number(book_id)
    }
  ));

  // export const GetBookByIdCall =(Role,id)=>apiClient.get(`/${Role}/book/${id}`);