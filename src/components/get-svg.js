import applications from '../images/applications.svg';
import chatBubble from '../images/chat-bubble.svg';
import check from '../images/check.svg';
import checkmarkCircle from '../images/checkmark-circle.svg';
import chevronCircle from '../images/chevron-circle.svg';
import chevron from '../images/chevron.svg';
import circlePlus from '../images/circle-plus.svg';
import cloud from '../images/cloud.svg';
import companies from '../images/companies.svg';
import complaints from '../images/complaints.svg';
import contacts from '../images/contacts.svg';
import copy from '../images/copy.svg';
import dashboard from '../images/dashboard.svg';
import documents from '../images/documents.svg';
import download from '../images/download.svg';
import enforcementActions from '../images/enforcement-actions.svg';
import enter from '../images/enter.svg';
import exit from '../images/exit.svg';
import facilities from '../images/facilities.svg';
import file from '../images/file.svg';
import fileUpload from '../images/file-upload.svg';
import gear from '../images/gear.svg';
import grid from '../images/grid.svg';
import hibiscus from '../images/hibiscus.svg';
import help from '../images/help.svg';
import history from '../images/history.svg';
import home from '../images/home.svg';
import horizontalDots from '../images/horizontal-dots.svg';
import horizontalDotsCircle from '../images/horizontal-dots-circle.svg';
import inbox from '../images/inbox.svg';
import incidents from '../images/incidents.svg';
import info from '../images/info.svg';
import inspections from '../images/inspections.svg';
import investigations from '../images/investigations.svg';
import loadingBubbles from '../images/loading-bubbles.svg';
import lock from '../images/lock.svg';
import magnifyingGlass from '../images/magnifying-glass.svg';
import menu from '../images/menu.svg';
import navCaret from '../images/nav-caret.svg';
import node from '../images/node.svg';
import notifications from '../images/notifications.svg';
import pencil from '../images/pencil.svg';
import permits from '../images/permits.svg';
import print from '../images/print.svg';
import profile from '../images/profile.svg';
import projects from '../images/projects.svg';
import publicationForms from '../images/publication-forms.svg';
import questionMarkCircle from '../images/question-mark-circle.svg';
import receipt from '../images/receipt.svg';
import reports from '../images/reports.svg';
import requiredStar from '../images/required-star.svg';
import search from '../images/search.svg';
import sharing from '../images/sharing.svg';
import sortArrow from '../images/sort-arrow.svg';
import tanks from '../images/tanks.svg';
import trash from '../images/trash.svg';
import unlock from '../images/unlock.svg';
import user from '../images/user.svg';
import verticalDots from '../images/vertical-dots.svg';
import validationError from '../images/validation-error.svg';
import viewer from '../images/viewer.svg';
import warning from '../images/warning.svg';
import wells from '../images/wells.svg';
import wrench from '../images/wrench.svg';
import writeDoc from '../images/write-doc.svg';
import x from '../images/x.svg';
import xCircle from '../images/x-circle.svg';

const blobs = {
	applications,
	chatBubble,
	check,
	checkmarkCircle,
	chevronCircle,
	chevron,
	circlePlus,
	cloud,
	companies,
	complaints,
	contacts,
	copy,
	dashboard,
	documents,
	download,
	enforcementActions,
	enter,
	exit,
	facilities,
	file,
	fileUpload,
	gear,
	grid,
	hibiscus,
	help,
	history,
	home,
	horizontalDots,
	horizontalDotsCircle,
	inbox,
	incidents,
	info,
	inspections,
	investigations,
	loadingBubbles,
	lock,
	magnifyingGlass,
	menu,
	navCaret,
	node,
	notifications,
	pencil,
	permits,
	print,
	profile,
	projects,
	publicationForms,
	questionMarkCircle,
	receipt,
	reports,
	requiredStar,
	search,
	sharing,
	sortArrow,
	tanks,
	trash,
	unlock,
	user,
	verticalDots,
	validationError,
	viewer,
	warning,
	wells,
	wrench,
	writeDoc,
	x,
	xCircle
}

const getSvg = {
	bindings: {
		name: '@'
	},
	controller: CollapseContainerController,
};

CollapseContainerController.$inject = ['$element'];

function CollapseContainerController($element) {

	const $ctrl = this;

	$element.addClass('SvgWrap-icon');

	this.$onInit = function() {

		if (!blobs[$ctrl.name]) {
			console.error(`no svg named '${$ctrl.name}'!`);
		}

		else $element[0].innerHTML = blobs[$ctrl.name];

	};
}

export default getSvg;