import { Mail, MapPin, Phone, Send, Users } from "lucide-react"
import type { IContacts } from "./types"

export const contacts: IContacts = {
  email: { link: "mailto:ivanovserezha04@gmail.com", content: "ivanovserezha04@gmail.com", label: "Email", icon: Mail },
  number: { link: "tel:+79788702341", content: "+7 (978) 870-23-41", label: "Номер телефона", icon: Phone },
  tg: { link: "https://t.me/schoolgo_kiribot", content: "KiriBot", label: "Телеграм бот", icon: Send },
  vk: { link: "https://vk.com/school_go_kiri", content: 'Школа Го "КИРИ"', label: "Сообщество ВКонтакте", icon: Users },
  address: { link: "https://yandex.ru/maps/geo/sevastopol/1443782471", content: "г. Севастополь, ул. ---, --", label: "Адрес", icon: MapPin }
}