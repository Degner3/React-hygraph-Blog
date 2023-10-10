import { Content } from "../../Components/Content/Content"
import style from "./MainPage.module.scss"



export const MainPage = () => {

    // const { data, isLoading, error } = useQuery({
    //     queryKey: [""],
    //     queryFn: async () =>
    //       request(
    //         "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbgekvz8h7601ugcskz5a7z/master",
    //         getFilms
    //       ),
    // })

    // console.log("Data", data);

    // if (isLoading) return <p>Loading...</p>

    // if (error) return <p>Error: {error.message}</p>;

    return (
      <section>
        <Content title="MainPage">
          <section className={style.mainpage}></section>

        </Content>
      </section>
    );
}