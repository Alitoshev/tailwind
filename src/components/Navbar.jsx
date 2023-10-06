function Navbar() {
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen bg-gradient-180 bg-gradient-to-r from-bg-1-1 from-05 to-bg-1-2 to-100%">
        <nav className="bg-gradient-to-r from-bg-1-1 from-05 to-bg-1-2 to-100% w-full z-1 flex flex-row overflow-hidden">
          <div className="max-w-screen-xl flex-1 text-base items-center flex p-10">
            <div className="flex flex-1 ml-40">
              <img
                src="../../public/assets/Asset 4@4x 1.svg"
                className="h-14 w-20"
                alt="Flowbite Logo"
              />
              <span className="mt-6 self-center text-1xl text-white font-semibold">
                CoinsFill
              </span>
            </div>
            <div className=" md:order-2 mr-32 flex-2">
              <button
                type="button"
                className="text-white mt-3 hover:bg-blue-800 border-white border focus:outline-none font-medium rounded-full text-sm px-4 py-2s p-2 bg-gradient-to-r from-bg-1-1 from-05 to-bg-1-2 to-100% text-center shadow-md pr-10 pl-10 md:mr-0 "
              >
                Войти
              </button>
            </div>
          </div>
        </nav>
        <div className="flex-row relative flex items-center gap-10">
          <div className="p-0">
            <h2 className="text-white font-bold text-4xl pl-20 pb-10 ml-36">
              CoinsFill — <br />
              современная, надежная <br />
              платежная система!
            </h2>
            <button
              type="button"
              className="text-white ml-56 mb-20 mt-3 focus:outline-none font-medium rounded-full text-sm py-2s p-3 bg-gradient-to-r from-bg-1-b-2-1 from-0% to-bg-1-b-2-2 to-100% bg-gradient-273 text-center shadow-md pr-10 pl-10 md:mr-0 "
            >
              Регистрация
            </button>
          </div>
          <img
            className="object-fill h-90 w-80"
            src="../../public/assets/Asset 4@4x 2.svg"
            alt=""
          />
        </div>
      </section>
      <section className="min-h-screen bg-bg-2 flex items-center justify-center">
        <div className="flex scale-125">
          <img
            className="h-100 w-100 mr-40"
            src="../../public/assets/cards-pc 2.png"
            alt=""
          />
        </div>
        <div className="z-20 mt-20 mr-40 mb-12">
          <div className="text-bg-2-1 font-bold text-3xl">
            Собирайте средства
          </div>
          <div className="text-bg-2-2 font-bold text-3xl">
            на подарок себе, <br /> другу, проект или любые другие цели!
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-bg-3 flex relative">
        <div className="font-bold text-4xl mt-52 ml-20 absolute z-20">
          <div className="text-bg-2-1">
            Моментальные <br /> денежные <br /> переводы
          </div>
          <div className="text-bg-2-2">
            родным и <br /> близким
          </div>
        </div>
        <img
          className="object-fill h-100 w-100 scale-150 mt-4"
          src="../../public/assets/friends-pc 1.svg"
          alt=""
        />
      </section>
      <section className="min-h-screen bg-bg-4">
        <div className="flex">
          <img
            className="flex"
            src="../../public/assets/secur-pc 1.png"
            alt=""
          />
          <div className="z-20 mt-44 mb-12 font-bold text-3xl">
            <div className="text-bg-2-2">
              Передовые технологии <br /> по защите нашей <br /> платежной
              системы
              <br />
              гарантируют вам
              <div className="text-bg-2-1">
                безопасность хранения <br /> ваших средств!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-bg-5">
        <div className="flex w-full justify-center items-center ml-20">
          <div className="flex flex-col">
            <div className="m-20">
              <div className="text-bg-2-1 text-6xl font-bold">1 300 000</div>
              <div className="text-bg-2-2 text-2xl font-bold">
                пользователей c CoinsFill!
              </div>
            </div>
            <button className="outline-none p-5 w-80 ml-20 rounded-full text-center shadow-md text-white bg-gradient-to-r from-bg-1-1 from-05 to-bg-1-2 to-100%">
              Присоединиться
            </button>
          </div>
          <div>
            <img
              className="h-100 w-100 scale-75 mr-20"
              src="../../public/assets/image 14.png"
              alt=""
            />
          </div>
        </div>
        <footer className="flex flex-row item-center">
          <div className="ml-40 mr-8 py-2">CoinsFill © 2023</div>
          <div>
            <img
              className=" mx-8"
              src="../../public/assets/psi-dss 1.png"
              alt=""
            />
          </div>
          <div>
            <img className="mr-8" src="../../public/assets/Vector.svg" alt="" />
          </div>
          <div>
            <img className="" src="../../public/assets/Vector (1).svg" alt="" />
          </div>
          <div className=" mx-20 text-sm py-2">
            Terms of Service / Privacy Policy / Our Fees
          </div>
          <div className="text-sm mr-4 py-2">Contact us</div>
          <div>
            <img src="../../public/assets/R.svg" alt="" />
          </div>
          <div>
            <img
              className="ml-1"
              src="../../public/assets/Group 30.svg"
              alt=""
            />
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Navbar;
