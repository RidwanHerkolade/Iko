import ContactHeader from "@/Component/ContactHeader/ContactHeader"
import ContactCard from "@/Component/ContactCard/ContactCard"
import Message from "@/Component/Messaage/Message"
import ContactSideBar from "@/Component/ContactSidebar/ContactSideBar"
const Contact = () => {
  return (
    <div>
        <ContactHeader/>
        <ContactCard/>
        <Message/>
        {/* <ContactSideBar/> */}
    </div>
  )
}
export default Contact