"use client";


interface MenuItemProps {
  onClick?: () => void;
  label: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { label, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 translate font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
