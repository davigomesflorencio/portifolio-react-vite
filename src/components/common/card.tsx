import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardProps {
	icon: IconProp;
	title: string;
	body: React.ReactNode;
}

const Card = (props: CardProps) => {
	const { icon, title, body } = props;
	return (
		<div className="rounded-[20px] outline outline-2 outline-[#f4f4f5] mb-8">
			<div className="p-[30px] pb-[5px]">
				<div className="flex items-center">
					<div className="text-[15px] text-tertiary">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="text-secondary text-[14px] pl-[20px] font-[650]">{title}</div>
				</div>
				<div className="pt-10 text-[15px]">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
