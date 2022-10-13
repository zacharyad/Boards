export type StyleCardWithLink = {
    name: string;
    desc: string | string[];
    linkPath: string;
    linkText: string;
  };

  export type StyleCardWithOutLink = {
    name: string;
    desc: string;
    linkPath?: string;

  };

  export interface modalObj {
    isModal: boolean, toggleModal: () => void; 
}
















  