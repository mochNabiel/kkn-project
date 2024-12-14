import PageHero from "@/components/page-hero";
import SectionVisiMisi from "@/components/profil/section-visi-misi";
import SectionPerangkatDesa from "@/components/profil/section-perangkat-desa";
import SectionSejarahDesa from "@/components/profil/section-sejarah-desa";

const ProfilePage = () => {
  return ( <main>
    <PageHero text="Profil Desa" />
    <SectionVisiMisi />
    <SectionPerangkatDesa />
    <SectionSejarahDesa />
  </main> );
}
 
export default ProfilePage;