import { Mail, MapPin, Phone, Send, Users } from "lucide-react"
import type { IContacts } from "./types"

export const contacts: IContacts = {
  email: { link: "mailto:ivanovserezha04@gmail.com", content: "ivanovserezha04@gmail.com", label: "Email", icon: Mail },
  number: { link: "tel:+79788702341", content: "+7 (978) 870-23-41", label: "Номер телефона", icon: Phone },
  tg: { link: "https://t.me/schoolgo_kiribot", content: "KiriBot", label: "Телеграм бот", icon: Send },
  vk: { link: "https://vk.com/school_go_kiri", content: 'Школа Го "КИРИ"', label: "Сообщество ВКонтакте", icon: Users },
  address: { link: "https://yandex.ru/maps/959/sevastopol/house/ploshchad_vosstavshikh_4k6/Z0oYcwZkTk0AQFpufXpxcXlrYw==/?ll=33.514787%2C44.600587&z=16.9", content: "г. Севастополь, пл. Восставших 4к6", label: "Адрес", icon: MapPin }
}