export class GameEntity {
    constructor(x, y, userProps = {}) {
        let defaultProps = {
            visible: true,
            isHero: false,
        };
        this.props = {...defaultProps, ...userProps};
        this.x = x;
        this.y = y;
    }
}