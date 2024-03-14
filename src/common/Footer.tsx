import { Link } from "react-router-dom";
import { footerItems } from "../utils/constant";
import { IconType } from "react-icons";

export default function Footer() {
  const { getInTouch, legal, menu } = footerItems;
  return (
    <div className="bg-lightGray">
      <div className="w-[85%] justify-between m-auto py-12 flex">
        <div className="flex w-full justify-between">
          <div className="h-[180px] max-h-[180px] w-[214px] max-w-[214px] self-center	">
            <img
              src="/footerLogo.png"
              alt="footer logo"
              className="h-[180px] max-h-[180px] w-[214px] max-w-[214px]"
            />
          </div>
          <FooterLinksRender item={menu} title="Menu" />
          <FooterLinksRender item={legal} title="Legal" />
          <FooterLinksRender item={getInTouch} title="Get in touch" social />
        </div>
      </div>
    </div>
  );
}

interface IFooterLinksRender {
  title: string;
  social?: boolean;
  item: {
    name?: string;
    path: string;
    icon?: IconType;
  }[];
}
const FooterLinksRender = ({
  item,
  title,
  social = false,
}: IFooterLinksRender) => {
  return (
    <div>
      <h3 className="font-semibold text-darkBlue mb-6 text-xs">{title}</h3>
      <ul className={`${social ? "flex gap-6" : "flex flex-col gap-2"}`}>
        {item.map((S) =>
          social ? (
            <Link key={S.name} className="text-3xs" to={S.path}>
              {S.icon && <S.icon />}
            </Link>
          ) : (
            <li key={S.name}>
              <Link to={S.path} className="hover:text-lightBlue/90">
                {S.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
