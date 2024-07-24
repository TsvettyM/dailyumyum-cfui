import CommonButton from "@/features/common/components/CommonButton";
import IconAdd from "@/features/icons/components/IconAdd";

interface IProps {
  title: string;
}

const AdminHeader = ({ title }: IProps) => {
  return (
    <div className="admin__header flex items-center">
      <h1 className="text-32">{title}</h1>

      <CommonButton
        href={`/admin/${title}/create`}
        style="black"
        type="button"
        title="Create"
        icon={<IconAdd className="mr-3" />}
        className="ml-auto text-white border-none h-10 !w-[200px] !rounded-8 bg-[#748D93]"
      />
    </div>
  );
};

export default AdminHeader;
