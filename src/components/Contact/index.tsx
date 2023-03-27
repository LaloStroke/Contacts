import React, { useRef, useState } from "react";
import contactStyles from "./contact.module.css";
import { SlOptionsVertical } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import useOnClickOutside from "@/src/hooks/useOnClickOutside";

const Contact: React.FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleIsActive = (): void => setIsActive(!isActive);
  const handleClickOutside = (): void => setIsActive(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const mainClass = isActive ? contactStyles.active : contactStyles.contact;
  const iconClass = isActive ? contactStyles.activeIcon : contactStyles.icon;
  const editClass = isActive
    ? contactStyles.editIconActive
    : contactStyles.editIcon;
  const handleIcon = isActive ? (
    <IoClose size={20} fill="#7D7D7D" />
  ) : (
    <SlOptionsVertical size={20} fill="#7D7D7D" />
  );

  useOnClickOutside(contactRef, handleClickOutside);

  console.log(isActive);

  return (
    <div className={contactStyles.contactDisplay} ref={contactRef}>
      <div className={mainClass}>
        <div className={contactStyles.imgContainer}>
          <img
            src="https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/326560885_847112559684475_534003260743172440_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZBpSuPm6nhk229q9mOsKvHLJuow4V27Acsm6jDhXbsGZheTdfhnPzE1zDVdLEtb45qsYFP9F3TOaHvutd2jLk&_nc_ohc=a_X2lUrAeNoAX_wlPcg&_nc_ht=scontent.fmex26-1.fna&oh=00_AfAIBNDoMCUrro_Y1UwkS8ItbNdDRWXvATnCj3UUfFjSUw&oe=63E00F96"
            className={contactStyles.img}
          />
        </div>
        <div className={contactStyles.info}>
          <div className={contactStyles.data}>
            Carlos David Zúñiga Rodríguez
          </div>
          <div className={contactStyles.data}>+52 1 56 3687 8686</div>
          <div className={contactStyles.data}>
            317308688@pcpuma.acatlan.unam.mx
          </div>
        </div>
        <div className={iconClass} onClick={handleIsActive}>
          {handleIcon}
        </div>
      </div>
      <div className={editClass}>
        <BsPencil size={20} fill={isActive ? "#7D7D7D" : "#ff000000"} />
      </div>
    </div>
  );
};

export default Contact;
