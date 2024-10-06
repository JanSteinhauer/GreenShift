
import './style.css';

interface PromptCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, subtitle, onClick}) => {
  return (
    <div className="col-lg-6 gpt-sample-prompt-title pr-10 pl-10">
      <div className="card gpt-prompt-card px-4 py-3 mt-2"  onClick={onClick}>
        {title}
        <div className="text-secondary">{subtitle}</div>
      </div>
    </div>
  );
};

export default PromptCard;