import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, NAP_LOCALITY, NAP_STREET, NAP_POSTAL, NAP_REGION } from "@/lib/locations/constants";
import { linkClass } from "./LocationStyles";

export default function NapContact() {
  return (
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#b0aaa2]">
      Contact:{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
        {CONTACT_EMAIL}
      </a>
      {" · "}
      <a href="tel:+919167636653" className={linkClass}>
        {CONTACT_PHONE_DISPLAY}
      </a>
      <br />
      {NAP_STREET}, {NAP_LOCALITY} {NAP_POSTAL}, {NAP_REGION}
    </p>
  );
}
