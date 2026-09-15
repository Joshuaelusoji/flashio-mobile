import activity from "@/assets/icons/activity.png";
import add from "@/assets/icons/add.png";
import adobe from "@/assets/icons/adobe.png";
import back from "@/assets/icons/back.png";
import canva from "@/assets/icons/canva.png";
import claude from "@/assets/icons/claude.png";
import dropbox from "@/assets/icons/dropbox.png";
import figma from "@/assets/icons/figma.png";
import github from "@/assets/icons/github.png";
import home from "@/assets/icons/home.png";
import medium from "@/assets/icons/medium.png";
import menu from "@/assets/icons/menu.png";
import notion from "@/assets/icons/notion.png";
import openai from "@/assets/icons/openai.png";
import plus from "@/assets/icons/plus.png";
import setting from "@/assets/icons/setting.png";
import spotify from "@/assets/icons/spotify.png";
import wallet from "@/assets/icons/wallet.png";
import restaurant from "@/assets/icons/restaurant.png";
import shop from "@/assets/icons/shop.png";
import mall from "@/assets/icons/mall.png";
import local from "@/assets/icons/local.png";
import pharmacy from "@/assets/icons/pharmacy.png";
import laundromat from "@/assets/icons/laundromat.png";
import logistics from "@/assets/icons/logistics.png";
import binocular from "@/assets/icons/binocular.png";
import user from "@/assets/icons/user.png";
import headphone from "@/assets/icons/headphone.png";
import file from "@/assets/icons/file.png";
import invoice from "@/assets/icons/invoice.png";
import receipts from "@/assets/icons/receipts.png";


export const icons = {
    home, wallet, setting, activity, add, back, menu,
    plus, notion, dropbox, openai, adobe, medium, figma,
    spotify, github, claude, canva,
    restaurant, shop, mall, local,pharmacy, laundromat,
    logistics, binocular, user, headphone, file, invoice,
    receipts
} as const;

export type IconKey = keyof typeof icons;