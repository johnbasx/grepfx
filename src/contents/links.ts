import { nanoid } from "nanoid";
import { MdOutlineExplore, MdOutlineArticle } from "react-icons/md";
import { TbBox, TbEyeglass, TbQuestionMark, TbSubtask } from "react-icons/tb";

export function createID() {
  const id = nanoid(22);
  return id;
}

export const navlinks = [
  {
    id: createID(),
    name: "Explore",
    link: "/explore",
    Icon: MdOutlineExplore,
  },
  {
    id: createID(),
    name: "Create",
    link: "/create",
    Icon: TbBox,
  },
  {
    id: createID(),
    name: "Blog",
    link: "/blog",
    Icon: MdOutlineArticle,
  },
  {
    id: createID(),
    name: "How it works",
    link: "/how-it-works",
    Icon: TbQuestionMark,
  },
  {
    id: createID(),
    name: "Jobs",
    link: "/jobs",
    Icon: TbSubtask,
  },
  {
    id: createID(),
    name: "Help center",
    link: "/help-center",
    Icon: TbEyeglass,
  },
];
