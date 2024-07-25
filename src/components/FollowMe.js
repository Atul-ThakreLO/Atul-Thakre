import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

function FollowMe() {
  useGSAP(() => {
    gsap.from(".follow-h", {
      y: -100,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".follow-h",
        start: "top 50%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  useGSAP(() => {
    gsap.from(".card", {
      y: -100,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".card",
        start: "top 50%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div>
      <div className="container w-[90%] mx-auto py-20 mt-10">
        <p className="text-center text-6xl follow-h mb-10">Follow me</p>
        <div className="wrapper flex flex-wrap items-center justify-evenly py-20">
          <div className="card mb-20">
            <div className="border-2 w-52 rounded-lg">
              <div className="profile-pic h-16 w-16 ml-3 rounded-full -mt-8 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/jpeg;base64,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"
                  alt="imsdas"
                />
              </div>
              <div className="border-b-2 py-2">
                <p className="ml-2">Atul thakre(LOGERS)</p>
                <p className="ml-2">@AtulThakre_Lg</p>
              </div>
              <div className="py-4 flex justify-center">
                <a
                  href="https://x.com/AtulThakre_Lg"
                  target="_blank"
                  className="px-4 py-1 rounded-full inline-block  bg-black text-white hover:scale-110"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="card mb-20">
            <div className="border-2 w-52 rounded-lg">
              <div className="profile-pic h-16 w-16 ml-3 bg-orange-600 rounded-full -mt-8 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC"
                  alt="imsdas"
                />
              </div>
              <div className="border-b-2 py-2">
                <p className="ml-2">Atul Thakre</p>
                <p className="ml-2">atul-thakre-logers</p>
              </div>
              <div className="py-4 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/atul-thakre-logers/"
                  target="_blank"
                  className="px-4 py-1 rounded-full inline-block bg-black text-white hover:scale-110"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="card mb-20">
            <div className="border-2 w-52 rounded-lg">
              <div className="profile-pic h-16 w-16 ml-3 rounded-full -mt-8 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxMSEA8OEQ4QEBEVEhYQDQ8VFRcQGBMWFxYTFRYYHSggGhsmGxcVITEhJSorLjAuGB8zODMtNygtMCsBCgoKDQ0NDw0NFSsZFRkrKysrKzcrLS0rKysrLS0rKysrLSsrLSsrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQYHCAUEAwL/xABBEAACAQMBBQQHBAYKAwAAAAAAAQIDBBEFBgcSITETQVFhCBQiQnGBkSMyobEVUmJywdEzNUNEc3SisrPCJZLD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDVAIDTKggAoIAKCACggAoIAKCACggAoIAKCACggAoIAKCACggAoIAICACggAoIAKCACggAoIf1Si5vEIynLwhGUn9EBAezZ7JajWSdLT7yUX0fY8K/1YPUp7sdYl0sGv3rm2X/AHFViQMvnuv1hdbHP7t1bP8A7Hm3WxepUk3PTrtJdWqakvrFvIo8IH9V6cqbxUhOm/CpTlB/6kj+AiggAoIAKCACghQAIAKCAACACggAoIAKCH16Tpla7rRo21KVWtPpGPcv1pPuXmB8jZlOymwN9qOJUqXZ27/taycYteMF1l8ehtTYXdHQteGtf8NzdLDUP7CnLyT++14y+SNnRiksJJJdEkSrGtdn9zdlRSdzKd1U5PEnww8furr8zPdO0a3t0o0LejSS6cFOK/E+4EUAAAAAfLe6dRrxca1GlUi1hqcIvl4czB9f3RafcJujGVrUfPNJ+zn918jYQA5o2r3Z39jmah6zbr36Kbkl+1Dr9DClLPNc0dmGA7cbrrXUOKrRxa3rX34L2JtdFVh0f7yw+nXoWpHOQPS2i2fudPrdjdUuCfuyTzCa8YS7/wAzzCooIAKCACggApAQACACggAoIfXpGm1buvTt6EeKtVliK7l4yfgkuYH17M7P19RuY29tHMnznJp8NOHfOb/Jd50vsZshb6XQVOjHiqS51askuOcvFvuXgibEbJ0dLtVSppOrLDrVGvanUxzb8vBGRGWgEbS6tL4hPPQCgAAAAAAAAAAA2SMk+jT+DA8vaTZ631ChKhc01OD+6/ehLulB9zRzTtvshX0q47OrmdGbfY1UuU4+D8JrvXzR1WeXtJoNG/tp29xBShNcn3xl3Ti+5oDkYHrbVbPVtOup29bm486c8cp02+U1/HzPINIoIAiggAoIAICFCgIUA2b/ANyWx3qtv67Xhi6uo/ZqSWadtnkvJywpPywu41Tu12a/SWo06Ulm3pfaV+XJwT5Qf7z/AATOpYxSSSWElhfAmmKACK1F6QGtTp0ra3pznB1JynNwm4vhisJZXPqzU+k7W39rLNC8rrnnhnNzi35qX8zNPSBk/wBJUU2+FWzx4Z4uZrAqN0bKb6+ap6jS4U+XbUU2vjKHX6G3tP1GjcUo1qFWnVoyWVOEk44+Jx0fpC6qRg4RqVI03LicY1JKLl4uKeMiDrHUdrbC3Tda9toY6/bRbTzjpHLPJnvP0lf3+k/3VN/wOX0l4FyIV09HehpL/v1NfGM/5Ho2G22nV89lf2ssdc1VH/dg5QyRpPqkIV2X6zDg4+OHZpZcuOPDw+PF0wau2v3zUKDlSsIes1VlOo8qkn5PrL5Gio3M1CUFUqKnPHFFVJcLS6Jxzhn5CFZHre3Oo3jfa3dSMH7lF9nHGfLn+Jlm4zXakdSnRqVak43FF4VSpOXtweeWW8cmawMu3Tya1q1x1zP6cPMDqIAEVhO9bY9alZOVOK9dtlKdB8sy75UW/CSX1wzmd5XJppp4aaw011TXczs45x307Mep3/b044t7xufJLEa/vr5/e+OfEuI18AQooIAKAAICACgh/VOm5yjCP3pyjFfGTSX5gdBbh9D7HT5XEl9pdTysr+zjyibNPg0GwVta0aMVhUqUI480ln8T7zKgB8+o3kKFGpWqNKnShKUm/BLIGmvSJt48VpUU4dp9pFx95x68XwzyNOHrbV6/U1G8qXNRv23inFvlCkvuxXh4s8gqKCAooIAKCACggApn25C2hPWIynOMZU6M5QTeHKT5YXjhGAH7WV3UoVYVqUuGtSkpQl4SX8CDssHhbE7Qx1GxpXMeUpxxUX6tRcpL6nukUMM3taF65pdVJfa0V2sPHMebX0MzP4rU1OLi+kk0/g1gDjFMp9+0Ng7a8uKDWOxr1IrL93OY/g0eeVFBAUUEAEABAPc2HtFW1SypyWYyuqeV5J8X8DwzMN0FPi12z8u3f0oTA6iABFDXG/fVHR0rs4tp3VaFJ4ePYSc5/JqOPmbHNP8ApGSfq9kvd7ern49ny/NgaNABUAAAAAAAAAAAAAG5fR21V8d3aOSxiFeEc8+vBUa8v6P6+Zu0539H7+t6n+Qrf81A6IIoAAOY98toqWt3GFhVIUaj/elDDf4GEmyvSBp41ak/1rGH4VaiNalQAAAAAQEAFMy3Ozxrtp5q4X1oTMMMh3d3PZaxYzbwlcxTflJOLX4gdZgAihqj0iKLdhbTSbULtJ4T5KVKay/DmkvmbXMT3paO7zSLmnFN1IwVSGMZc6bU0ufjjAHLAInkFRQQAUEAFBABQQAUEAG1vR4s+K/ua2XilaqGO77Son/8jfxqz0ftHdKwq3EopSuq3svHN0oLhjnyzxNfE2mRQAAc8+kHPOrUV4WMP+aozWRne+65VTW6uHns6NCHw9ltr6tmBlRQQAUEAEAAA/W1r9nUhUXWnUhP/wBZKX8D8iAdm6ZdqtQp1YtONSnCSa6c0mfSa+3I636zpcKcm3UtZOm84zw9Y9O7BsEihJRTTTWU1h/AoA5a3obKS02/mlF+q3EpVKLxyWXmUPin+Bh515tZs1Q1K1lb3EeT5wnH70J904v+Hec3bZ7v7zTJvjpyrW3u1qUW1j9tLnF/gBigImCooAAAAAAQCnqbM6FU1C7p21FPiqP2mvcpr7038j9dmdlbvUaiha0ZSjn2qkk1TivFy/kdIbv9hqOk0OGOKl1US7aq44cn+rHwgu5AZBpGnwtbenQpJKnShGEUvBI+wAihJSSTb5JLL+BTGN5Gtqy0y4q5xNwcIYazxy5LGQOaNr9Q9Z1G6rcsVLibWHywnwr8EeQT49e/4lKgAAAAAgIAKCADPdzW0vqWpRhUli3u8U5ZfJVPcl18eXzR00cUZOnN0W2K1KxUKks3lqowrJ4zKPuVUvBpc/NMivq3l6RqFzbRemXM6VenJtwjNQ7SOPu8T6PwzyNNaFvN1PTq7p3UqleMJuNWlcLFSLWE0n1T8unM6WNW77NiI3Vu723gvW7eOanCudWguqeOso9z8OXhgM92Z2goahbQuLeWYS6p/ejPvhJdzR6dSCkmpJOL6prKOXt1u2z0q6+04pWdxwqsk37L7qsV4rv8vgdOWN5Tr041KM41KU0nGUWmmgMP1/dXpt23LsOxqvPtUJcHN97S5MwfU9xGMyoaglBJt9vRT+eYtY+hu8wHfXrkrTSpxhLhqXMlSXPD4X97HyA5u1C3VKtUpxqRqxpzcVOCajLHes9x+B/KKVFC83hZWXjOF447yADbeg7lHc06db9JUZUKkVJOhRbbi13SbwvoZzoW53TbZqVSNS5mu+tLl1z9xcjwPR41uU6Ne0m21QcalPPdCfVfVPkbiIr8bW1hSioUoQhBdFCKS/A/YAAAABz/AL/Npu2uoWVOWadt7VXD5Os1yj8lz+aNt7wNqoaXYzryw60vYoQysyrNcvkur8kco3NxOrOVSpJzqVJOU5Pq5N5bYH8AgKiggAoIAICACggAp7OyG0dXTbyFzRbfDyqRzynSb9qL/h5nigDsfZ3XKN/bQuLefFTqLPnGXfGS7mj0KkFJNNZTTTXkzlTd7txW0mvlZna1Gu2pZ/1x8JfmdO6FrVC9oRr21SNSlNdU+affGS7mRXMO8jZaem39SDi1b1ZSnQl3ODeXFeafcefs9tZe6fytLmdODeXB4lDPjws6r1/Qbe/oujdUY1ab6ZXOL/Wi+qZq7VNxFJyzbXlSEefs1IqXwWQMMrb49VlHhVShF/rRo8/xZiOt7QXV7LiuripWaeUpP2YvGPZj0RtCO4ar330Mf4Ri28fd8tHp0ZesOtKtOUX7CiklHPIDBQQFRQQAbV9HmT/SNddzt1n5SZ0Ic8+j1/WVb/Lf9joYigAAHz6he07elOrWnGFKnFylKTwkkL+9p0KcqtacadKCzKUnhJHN29HeJPU6nY0HKFhTlyXR1Wvfl5eCA8veNtjPVrx1Paja0sxt4Puj3zf7T/kYoQFRQQAUEAFBABAAFAAAAAA9/Y/a+60ut2ltP2JNdpSlngmvNdz80eAAOqth94lnqkVGEuxukvao1WlL4wfvx8180jMDianUcZKUZSjKLTi4tpqS6NNc0zaGx++e6tkqd7H1qiuSnyVVLz7pfny7yDok0z6R/wDQ2f8Aiz/2MzvZ7eJp16l2dzCE37lV8Ek/Dmaw9IDaG3uHbUKFWNWpSlOdRwaajlOKTfiBp8AFAAAbW9Hdf+QuH3q3X+5nQhzRuP16jZ6lJXE404V6PDGcniKmnlJvuzz+hvXW9t7CzjxVrulnGVGMlKT8MJfAgyIx7a/bO00ulx3NVdo0+zpQw6s3+zHw83yNTbXb7qtRSp6dT7GLyu2qJOfxhHon8TUt7eVK9SVStUnUqzeZSnJuT+b/ACAyfbzb+51aeJ/ZWkZZp0Yvl5Sm/el+BiQBQAAAAAAAAAARAQEVQQAUEAFBABQQAX8wQAUEAFBABQ3835sgAoIAKCACggAoIAKCACggAgIAKCACggAoIAKCACggAoIAKCACggAoIAKCACggAoIAKCACghQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                  alt="imsdas"
                />
              </div>
              <div className="border-b-2 py-2">
                <p className="ml-2">Atul Thakre</p>
                <p className="ml-2">Atul-ThakreLO</p>
              </div>
              <div className="py-4 flex justify-center">
                <a
                  href="https://github.com/Atul-ThakreLO"
                  target="_blank"
                  className="px-4 py-1 rounded-full inline-block  bg-black text-white hover:scale-110"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowMe;
