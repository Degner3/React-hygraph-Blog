import { useQuery } from "@tanstack/react-query";
import { getFooter } from "../../Queries/getFooter"
import { request } from "graphql-request";
import style from "./Footer.module.scss"
import { BiCopyright } from "react-icons/bi"
import DOMPurify from 'dompurify';


export const Footer = () => {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["getFooter"],
    queryFn: async () =>
      request(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbgekvz8h7601ugcskz5a7z/master",
        getFooter
      ),
  });


  // console.log("Data", data);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;


    return (
      <footer className={style.footer}>
        <p className={style.copyright}>
          {data.footer.copyright}<BiCopyright className={style.c}/>
          </p>
        {/* <p>{data.footer.author.html}</p> */}
        <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(data.footer.author.html)}}></p>
      </footer>
    );
}