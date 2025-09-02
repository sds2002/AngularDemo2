Explanation:
@ViewChild('headingRef') heading: This captures the reference to the <h2> element tagged with #headingRef from the template.

ElementRef allows direct access to the underlying DOM element.

ngAfterViewInit() lifecycle hook is used to safely access the element once the view initialization is complete.

The changeHeadingColor() method changes the heading's color by manipulating the DOM element's style property via ViewChild.

This demonstrates how ViewChild is used to access and manipulate a DOM element in an Angular component programmatically.