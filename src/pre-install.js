// UI组件库按需引入
import {
    Loading,
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    MessageBox,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Notification,
    Slider,
    Icon,
    // Row,
    // Col,
    Upload,
    Progress,
    // Spinner,
    Message,
    Badge,
    // Card,
    Rate,
    // Steps,
    // Step,
    Carousel,
    Scrollbar,
    CarouselItem,
    // Collapse,
    // CollapseItem,
    Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    InfiniteScroll,
    PageHeader,
    CascaderPanel,
    Avatar,
    Drawer,
    Popconfirm,
    // Skeleton,
    // SkeletonItem,
    // Empty,
    // Descriptions,
    // DescriptionsItem,
    // Result
} from 'element-ui';

const components = [
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    // Row,
    // Col,
    Upload,
    Progress,
    // Spinner,
    Badge,
    // Card,
    Rate,
    // Steps,
    // Step,
    Carousel,
    Scrollbar,
    CarouselItem,
    // Collapse,
    // CollapseItem,
    Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Avatar,
    Drawer,
    Popconfirm,
    // Skeleton,
    // SkeletonItem,
    // Empty,
    // Descriptions,
    // DescriptionsItem,
    // Result,
]

import 'element-ui/lib/theme-chalk/index.css';

// 加载全局样式
import '@/core/assets/global.css';

// 大屏动画插件
import animater from '@cutting-mat/animater';

// 组件库
import widgets from '@/widgets'

// 预安装插件
export default {
    install: function (Vue, opts = {}) {
        // 安装ElementUI
        components.forEach(component => {
            Vue.use(component);
        });

        Vue.use(InfiniteScroll);
        Vue.use(Loading.directive);

        Vue.prototype.$ELEMENT = {
            size: opts.size || '',
            zIndex: opts.zIndex || 2000
        };

        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$message = Message;

        // 安装大屏动画插件
        Vue.use(animater);
        // 安装组件库
        Vue.use(widgets)

    }
}