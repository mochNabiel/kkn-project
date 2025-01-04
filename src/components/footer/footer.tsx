import SectionInfo from "@/components/footer/section-info"
import SectionVisitors from "@/components/footer/section-visitors"
import SectionCopyright from "@/components/footer/section-copyright"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 p-5 md:p-10 bg-gradient-to-r from-self-blue to-self-green">
      <SectionInfo />
      <SectionVisitors />
      <SectionCopyright />
    </footer>
  )
}

export default Footer