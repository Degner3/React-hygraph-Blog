import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request";
import { Content } from "../../Components/Content/Content";
import { GetAllBlogs } from "../../Queries/GetAllBlogs";
import style from "./AllBlogsPage.module.scss"



export const AllBlogs = () => {

    
    const { data, isLoading, error } = useQuery({
        queryKey: ["getBlogs"],
        queryFn: async () =>
          request(
            "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbgekvz8h7601ugcskz5a7z/master",
            GetAllBlogs
          ),
      });

    console.log("Data", data);

    if (isLoading) {
      return <p>Loading... </p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    



    return (
      <Content title="AllBlogs">
        {data.blogPosts.map((item, index) => {
          return (
            <div className={style.cards} key={index} to={`/blogs/${item.id}`}>
              <h3>Title: {item.title}</h3>
              <h4>Forfatter: {item.blogAuthor}</h4>
              <p>Beskrivelse: {item.blogDescription}</p>
            </div>
          );
        })}
      </Content>
    );



}